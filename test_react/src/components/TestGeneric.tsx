interface TestProps<T> {
  items: T[],
  selectedItem: T,
  someFunction: (arg1: T, arg2: number) => void
}

export function Test<T extends { id: number, name: string }>(props: TestProps<T>) {
  const { items, selectedItem, someFunction } = props;

  return (
    <>
      <div className="flex gap-x-3">
        {
          items.map((item, index) => {
            const activeCls = item.id === selectedItem.id ? 'bg-slate-500 text-white' : ' bg-slate-200';
            return <div
                key={item.id}
                className={'py-2 px-4 rounded ' + activeCls}
                onClick={() => someFunction(item, index)}
              >
                {item.name}
              </div>
            }
          )
        }
      </div>
    </>
  )
};