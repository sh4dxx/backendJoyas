const HATEOAS = async (entity, data, limit, totalStock) => {
  const result = await data.map((item) => {
    return {
      name: item.nombre,
      href: `/${entity}/${item.id}`
    }
  }).slice(0, limit)

  const dataWithHateoas = {
    totalJoyas: data.length,
    stockTotal: Number(totalStock.stock),
    results: result
  }
  return dataWithHateoas
}
export default HATEOAS
