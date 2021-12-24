import React from 'react'
import { useSelector } from 'react-redux'
import { ResultsList } from 'components/molecules'
import { SearchBar } from 'components/organisms'
import { getSearchResults } from 'store/selectors'
import { GoBackButton } from 'components/atoms'
import { routes } from 'config/routes'
import { Wrapper } from './SearchPage.styles'

const SearchPage = () => {
  const { results } = useSelector(state => ({
    results: getSearchResults(state),
  }))

  return (
    <Wrapper>
      <GoBackButton path={routes.root()} />
      <SearchBar />
      <ResultsList data={results} />
    </Wrapper>
  )
}

export default SearchPage
