import { fromJS } from 'immutable';
import createHistory from 'history/createMemoryHistory'
import { NOT_FOUND } from 'redux-first-router'
import configureStore from '../src/configureStore'

function getInitialStateFromPath(path) {
  let friends = {};
  if (path === '/friend/rebecca-jones') {
    friends = {
      'rebecca-jones': {
        slug: 'rebecca-jones',
        name: "Rebecca Jones",
      }
    }
  }

  return {
    slideover: {
      open: false,
    },
    friends: fromJS(friends),
  }
}

export default async (req, res) => {
  const preLoadedState = getInitialStateFromPath(req.path);

  const history = createHistory({ initialEntries: [req.path] })
  const { store, thunk } = configureStore(history, preLoadedState)

  let location = store.getState().location
  if (doesRedirect(location, res)) return false

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

  await thunk(store) // THE PAYOFF BABY!

  location = store.getState().location // remember: state has now changed
  if (doesRedirect(location, res)) return false // only do this again if ur thunks have redirects

  const status = location.type === NOT_FOUND ? 404 : 200
  res.status(status)
  return store
}

const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === 'redirect') {
    res.redirect(302, pathname)
    return true
  }
}
