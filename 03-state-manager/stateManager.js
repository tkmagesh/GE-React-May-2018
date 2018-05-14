let SM = (function(){	
	let _currentState = undefined,
		_listeners = [],
		_reducer = undefined,
		_init_action = '@@INIT_ACTION';
	
	function getState(){
		return _currentState;
	}

	function subscribe(listener){
		if (typeof listener === 'function')
			_listeners.push(listener);
	}

	function triggerChange(){
		_listeners.forEach(listener => listener());
	}

	function dispatch(action){
		let result = _reducer(_currentState, action);
		if (result === _currentState) return;
		_currentState = result;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return{ getState, subscribe, dispatch };
	}

	return { createStore };
})();