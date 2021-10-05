import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useParams } from 'react-router'

// REDUX
import { useSelector, useDispatch } from 'react-redux'

// ACTIONS
import { getAction } from 'actions/myActions'

// STYLE
import './Homepage.scss'

// COMPONENTS
import { Title } from 'components'

const Homepage = ({ className = '' }) => {
  // CREATE DISPATCH FOR REDUX STATE
  const dispatch = useDispatch()
  const { t } = useTranslation()

  // GET PARAMS FROM PATH
  // eslint-disable-next-line
  const { id } = useParams()

  // GRAB VALUES FROM YOUR REDUCER
  // eslint-disable-next-line
  const { isGettingData } = useSelector(state => state.reducerNameIWantToUseInComponents)

  const [localData, setLocalData] = useState(null)
  // eslint-disable-next-line
  const [localError, setLocalError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAction())
        .then(response => setLocalData(response))
        .catch(error => {
          setLocalError(error)
        })
    }
    if (!localData) {
      fetchData()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className={classNames('homepage', className)}>
      <Title className="test" />
      <div className="homepage-title">{t('page.flow.title')}</div>
      <div className="homepage-subtitle">Subtitle</div>
      <div className="homepage-button">button</div>
    </div>
  )
}

// IT'S A MUST
Homepage.propTypes = {
  className: PropTypes.string, // if it's mandatory prop add ".isRequired"
}

export default Homepage
