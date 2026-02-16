type Props = {
  bride: string;
  groom: string;
  date: string;
  time: string;
  location: string;
  address: string;
};

export function InvitationInfo({
  bride,
  groom,
  date,
  time,
  location,
  address,
}: Props) {
  return (
    <div className="bg-[var(--color-bg)] text-center px-6 pt-12 pb-8">

      {/* Texto superior */}
      <p className="tracking-[0.3em] text-xs text-[var(--color-primary)]">
        VOCÊ É NOSSO CONVIDADO PARA O CASAMENTO DE
      </p>

      {/* Nome do Noivo */}
      <h1 className="text-5xl text-[var(--color-primary)] mt-6"
        style={{ fontFamily: "var(--font-elegant)" }}>
        {bride}
      </h1>


      {/* & */}
      <p className="text-2xl text-[var(--color-secondary)] my-3">&</p>

      {/* Nome da Noiva */}
      <h1 className="text-5xl text-[var(--color-primary)]"
        style={{ fontFamily: "var(--font-elegant)" }}>
        {groom}
      </h1>


      {/* Linha decorativa */}
      <div className="my-6 flex justify-center items-center gap-4">
        <div className="h-px w-10 bg-[var(--color-secondary)] opacity-60" />
        <span
          className="material-symbols-outlined text-[var(--color-secondary)]"
          style={{ fontSize: "20px" }}
        >
          favorite
        </span>

        <div className="h-px w-10 bg-[var(--color-secondary)] opacity-60" />
      </div>


      {/* Informações */}
      <div className="space-y-5 text-[var(--color-text)]">

        <div>
          <p className="text-xs tracking-[0.3em] text-[var(--color-muted)]">
            DATA
          </p>
          <p className="mt-1">{date}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-[var(--color-muted)]">
            HORÁRIO
          </p>
          <p className="mt-1">{time}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-[var(--color-muted)]">
            LOCAL
          </p>
          <p className="mt-1">{location}</p>
          <p className="italic text-sm text-[var(--color-muted)] mt-1">
            {address}
          </p>
        </div>

      </div>
    </div>
  );
}
