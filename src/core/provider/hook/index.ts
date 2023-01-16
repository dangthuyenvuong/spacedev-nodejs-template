/**
 * 
 * Action = <Input, Output>{
 *  doAction : (props: Input) => Output -> Hàm thực thi
 *  addAction: (callback: (props: Input) => Output) -> Hàm add action
 * }
 * 
 * createAction((props: Input) => Output, {name?: string}) : Action<Input, Output>
 */