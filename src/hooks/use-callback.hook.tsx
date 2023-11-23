export const UseCallbackHook = () => {

}

/* Notes:
*  1, Very similar to useMemo, to me the ONLY useful case of useCallback is the function itself is hard to re-create,
*     so we wrap the function to useCallback, to avoid the recreation of the function at each render.
*
*
*  2, referential equality
*
* */
