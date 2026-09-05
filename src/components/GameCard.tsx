import { Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <div
      className={`bg-white rounded-2xl border p-6 flex flex-col shadow-sm relative overflow-hidden ${
        game.highlight
          ? "border-amber-300 shadow-lg ring-1 ring-amber-100 scale-[1.02]"
          : "border-amber-100 hover:border-amber-200 hover:shadow-md transition"
      }`}
    >
      {/* madera top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${game.highlight ? "bg-gradient-to-r from-amber-500 to-orange-600" : "bg-amber-200"}`} />
      {game.badge && (
        <span
          className={`text-xs font-bold tracking-wide px-3 py-1 rounded-full self-start mb-4 shadow-sm ${
            game.highlight ? "bg-amber-600 text-white" : "bg-stone-800 text-amber-50"
          }`}
        >
          ● {game.badge}
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-sm border border-amber-700/20">
          {game.image}
        </div>
        <div>
          <div className="font-extrabold leading-none text-stone-900">{game.name}</div>
          <div className="text-xs font-medium text-stone-500">
            {game.publisher} · {game.year} · ★ {game.bggRating}/10
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-black tracking-tight text-stone-900">
          {game.price}
          <span className="text-xs font-semibold text-stone-500 ml-1">en Amazon</span>
        </div>
        <div className="text-xs font-medium text-amber-800 mt-1 italic">{game.bestFor}</div>
      </div>

      <ul className="text-sm space-y-2 mb-4 flex-1 border-t border-amber-100 pt-4">
        <li className="flex justify-between">
          <span className="text-stone-500 font-medium">Jugadores</span>
          <span className="font-bold text-stone-900">{game.players}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-stone-500 font-medium">Duración</span>
          <span className="font-bold text-stone-900">{game.duration}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-stone-500 font-medium">Edad</span>
          <span className="font-bold text-stone-900">{game.age}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-stone-500 font-medium">Dificultad</span>
          <span className="font-bold text-stone-900">{game.complexity}/5</span>
        </li>
      </ul>

      <div className="text-xs leading-relaxed space-y-1.5 mb-5">
        <div className="font-semibold text-stone-800">+ {game.pros.join(" • ")}</div>
        <div className="font-medium text-stone-500">- {game.cons.join(" • ")}</div>
      </div>

      <a
        href={game.amazonUrl}
        target="_blank"
        rel="nofollow sponsored"
        className={`text-center w-full py-3.5 rounded-xl text-sm font-black transition ${
          game.highlight
            ? "bg-amber-600 text-white hover:bg-amber-700 shadow-md shadow-amber-200"
            : "bg-stone-900 text-amber-50 hover:bg-stone-800"
        }`}
      >
        Ver en Amazon →
      </a>
      <p className="text-xs font-medium text-stone-400 text-center mt-2.5">Afiliado · precio sin coste extra</p>
    </div>
  );
}
