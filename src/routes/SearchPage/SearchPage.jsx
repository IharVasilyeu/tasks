import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'
import { ResultsList } from 'components/molecules'
import { SearchBar } from 'components/organisms'
import { getSearchResults } from 'store/selectors'
import { GoBackButton } from 'components/atoms'
import { routes } from 'config/routes'
import { DefaultTemplate } from 'components/templates'
import { Wrapper } from './SearchPage.styles'

const SearchPage = () => {
  const { results } = useSelector(state => ({
    results: getSearchResults(state),
  }))

  return (
    <Alert.ErrorBoundary>
      <DefaultTemplate>
        <Wrapper>
          <GoBackButton path={routes.root()} />
          <SearchBar />
          <ResultsList data={results} />
        </Wrapper>
      </DefaultTemplate>
    </Alert.ErrorBoundary>
  )
}

export default SearchPage
