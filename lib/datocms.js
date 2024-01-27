import got from "got";
import datocmsConfig from "@config/datocms";
import { getAllSlugs } from "./data";
export async function request({ query, variables, preview, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: `Bearer ${datocmsConfig.token}`,
  };

  const body = await got
    .post(`https://graphql.datocms.com${preview ? "/preview" : "/"}`, {
      json: {
        query,
        variables,
      },
      headers: {
        authorization: `Bearer ${datocmsConfig.token}`,
      },
    })
    .json();

  if (body.errors) {
    throw new Error(
      `Invalid GraphQL response! Query: ${JSON.stringify(query)}, Variables: ${JSON.stringify(
        variables
      )}, Preview: ${preview}, Response: ${JSON.stringify(body)}`
    );
  }

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  return body?.data;
}

export const handleErrors = (handler) => async (context) => {
  try {
    return await handler(context);
  } catch (e) {
    // await handleServerSideError(e, context);
  }
  return false;
};

export function gqlStaticPaths(
  query,
  {
    paramName,
    dataToParams,
    basePathParamName,
    subPathParamName,
    paginatedQuery,
    // useFileStorage, // Use file storage api to share data with getStaticProps
  } = {}
) {
  return async () => {
    const data =
      paginatedQuery &&
      (await request({
        query: query,
        first: paginatedQuery?.first,
        requiredKey: paginatedQuery?.requiredKey,
      }));

    const pathsArray = getAllSlugs(data?.pages, "project_page");

    return {
      fallback: "blocking",
      paths: pathsArray,
    };
  };
}

export function gqlStaticPropsWithSubscription(query, { requiredKeys, revalidate } = {}) {
  return handleErrors(async ({ params, preview, locale }) => {
    // For when extra data needs to be fetched before the page query
    const variables = params;
    const data = await request({
      query: query,
      includeDrafts: preview,
      preview: preview,
      includeDrafts: preview,
      variables: {
        ...variables,
      },
      // previewData,
    });

    return {
      revalidate,
      props: {
        preview: !!preview,
        subscription: preview
          ? {
              query,
              token: process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN,
              variables: variables ?? null,
              preview: true,
              enabled: true,
              environment: process.env.NEXT_PUBLIC_DATO_ENVIRONMENT || "main", // Should match the environment found at /admin/environments
              initialData: {
                ...data,
              },
            }
          : {
              enabled: false,
              initialData: {
                ...data,
              },
            },
      },
    };
  });
}

// DATO REQUEST TEMPLATE
// import { GraphQLClient } from "graphql-request";
// export function request({ query, variables, includeDrafts, excludeInvalid }) {
//   const headers = {
//     authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
//   };
//   if (includeDrafts) {
//     headers['X-Include-Drafts'] = 'true';
//   }
//   if (excludeInvalid) {
//     headers['X-Exclude-Invalid'] = 'true';
//   }
//   const client = new GraphQLClient('https://graphql.datocms.com', { headers });
//   return client.request(query, variables);
// }
