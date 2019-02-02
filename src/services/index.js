function getCompaniesUrl(searchParams) {

  return Object.keys(searchParams).reduce((acc, key) => {
    const searchValue = searchParams[key].value

    if (searchParams[key].value !== undefined &&searchParams[key].value !== 'all') {
      if (!acc.seenFirstQuery) {
        acc.seenFirstQuery = true
        acc.url += `?${key}=${searchValue}`
      } else {
        acc.url += `&${key}=${searchValue}`
      }
    }

    return acc
  }, {
    url: 'https://ratchcumbria.herokuapp.com/api/companies',
    seenFirstQuery: false
  })
}

export {
  getCompaniesUrl
}
