import { Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <div
      className={`bg-white rounded-3xl border p-6 flex flex-col shadow-sm ${
        game.highlight ? "border-indigo-200 shadow-xl ring-1 ring-indigo-100 scale-[1.02]" : "border-zinc-200"
      }`}
    >
      {game.badge && (
        <span
          className={`text-xs font-bold tracking-wide px-3 py-1 rounded-full self-start mb-4 shadow-sm ${
            game.highlight ? "bg-indigo-600 text-white" : "bg-zinc-900 text-white"
          }`}
        >
          {game.badge}
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm">
          {game.image}
        </div>
        <div>
          <div className="font-bold leading-none text-zinc-900">{game.name}</div>
          <div className="text-xs font-medium text-zinc-500">
            {game.publisher} · {game.year} · {game.bggRating}/10 BGG
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-extrabold tracking-tight text-zinc-900">
          {game.price}
          <span className="text-xs font-semibold text-zinc-500 ml-1">en Amazon</span>
        </div>
        <div className="text-xs font-medium text-zinc-500 mt-1">{game.bestFor}</div>
      </div>

      <ul className="text-sm space-y-2 mb-4 flex-1 border-t border-zinc-100 pt-4">
        <li className="flex justify-between">
          <span className="text-zinc-500 font-medium">Jugadores</span>
          <span className="font-semibold text-zinc-900">{game.players}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-zinc-500 font-medium">Duración</span>
          <span className="font-semibold text-zinc-900">{game.duration}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-zinc-500 font-medium">Edad</span>
          <span className="font-semibold text-zinc-900">{game.age}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-zinc-500 font-medium">Complejidad</span>
          <span className="font-semibold text-zinc-900">{game.complexity}/5</span>
        </li>
      </ul>

      <div className="text-xs leading-relaxed space-y-1.5 mb-5">
        <div className="font-medium text-zinc-900">+ {game.pros.join(" • ")}</div>
        <div className="font-medium text-zinc-500">- {game.cons.join(" • ")}</div>
      </div>

      <a
        href={game.amazonUrl}
        target="_blank"
        rel="nofollow sponsored"
        className={`text-center w-full py-3.5 rounded-full text-sm font-bold transition ${
          game.highlight
            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100"
            : "bg-zinc-900 text-white hover:bg-black"
        }`}
      >
        Ver en Amazon →
      </a>
      <p className="text-xs font-medium text-zinc-400 text-center mt-2.5">Enlace afiliado · precio sin coste extra</p>
    </div>
  );
}
