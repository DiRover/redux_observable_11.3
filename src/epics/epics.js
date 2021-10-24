import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { LOAD_LIST, LOAD_DESCRIPTION } from '../actions/actionTypes';
import { loadSuccess, loadFail, loadDescriptionSuccess, loadDescriptionFail } from '../actions/actionCreators';
import { of } from 'rxjs';

console.log(`${process.env.REACT_APP_SEARCH_URL}/ra/news`);

export const listEpic = action$ => action$.pipe(
    ofType(LOAD_LIST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/ra/news`).pipe(
        map(respons => loadSuccess(respons)),
        catchError(() => of(loadFail()))
    )),
);

export const descriptionEpic = action$ => action$.pipe(
    ofType(LOAD_DESCRIPTION),
    map(o => o.payload.id),
    tap(o => console.log(o)),
    //map(o => new URLSearchParams({ q: o })),//нафиг этот квери, потом на сервере сложнее айди вытащить
    switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/services/${id}`).pipe(
        map(o => loadDescriptionSuccess(o)),
        catchError(() => of(loadDescriptionFail()))
    )),

);