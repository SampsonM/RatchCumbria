function getCompaniesUrl(searchParams) {

  return Object.keys(searchParams).reduce((acc, key, index) => {
    const searchValue = searchParams[key].value

    if (searchParams[key].value !== undefined) {
      return index === 0
        ? acc + `?${key}=${searchValue}`
        : acc + `&${key}=${searchValue}`
    }

    return acc

  }, 'https://ratchcumbria.herokuapp.com/api/companies')
}

export {
  getCompaniesUrl
}
