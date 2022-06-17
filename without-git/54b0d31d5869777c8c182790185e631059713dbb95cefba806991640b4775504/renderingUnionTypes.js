function TypeOne({ title, subtitle }) {
 return (
   <h1>{title}</h1>
   <p>{subtitle}</p>
 )
}

function TypeTwo({ image, content }) {
  return (
    <div>
      <img src={image} />
      <p>{content}</p>
    </div>
  )
}

export default function Page({ data: { page }) {
  const blocks = page.blocks.map((block) => {
    const Block = block.remoteTypeName === 'One' ? TypeOne : TypeTwo
    return <Block data={block} />
  })
  return (
    <>
      <h1>{page.title}</h1>
      {blocks}
    </>
  )
}

export const query = graphql`
  query PageQuery($pageId: String!) {
     page: graphCmsPage(id: { eq: $pageId }) {
        title
        blocks {
          ... on GraphCMS_One {
            id
            remoteTypeName
            title
            subtitle
          }
          ... on GraphCMS_Two {
            id
            remoteTypeName
            image
            content
          }
        }
     }
  }
`