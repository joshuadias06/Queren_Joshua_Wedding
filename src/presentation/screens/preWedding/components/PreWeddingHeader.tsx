type Props = {
  profileImage: string;
};

export function PreWeddingHeader({ profileImage }: Props) {
  return (
    <div className="w-full mb-8">
      {/* Topo */}
      <div className="flex items-center gap-6">
        {/* Foto maior */}
        <div className="w-36 h-36 rounded-full p-[4px] bg-gradient-to-tr from-purple-400 via-pink-400 to-purple-600">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src={profileImage}
              alt="perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Nome com mesma fonte da Home */}
        <div>
          <p
            className="text-3xl text-[var(--color-primary)]"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Queren e Joshua
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-5 text-sm text-gray-700 leading-relaxed">
        <p>Nosso pré-wedding 💜</p>
      </div>

      {/* Botão */}
      <div className="mt-5">
        <button className="w-full py-3 rounded-lg font-medium text-white bg-purple-500 hover:bg-purple-600 transition shadow-sm">
          Deixe sua mensagem para os noivos
        </button>
      </div>
    </div>
  );
}