import portfolio from '../data/portfolio.json'

export const Highlights = () => {
  return (
    <div className='px-8 max-sm:px-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolio.highlights.map((item) => (
          <div key={item.label} className="bg-trans-1 p-4 round-2 border border-zinc-800">
            <p className="text-yellow-700 font-bold text-sm">{item.label}</p>
            <p className="text-slate-300 text-sm pt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
