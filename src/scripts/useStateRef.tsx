var React = require("react");

function useStateRef(defaultValue: any) {
  var [state, setState] = React.useState(defaultValue);
  var ref = React.useRef(state);

  var dispatch = React.useCallback(function (val: any) {
    ref.current = typeof val === "function" ? val(ref.current) : val;

    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

export default useStateRef;
