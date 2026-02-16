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
    <div className="bg-[#F5F3F1] text-center px-6 pt-10 pb-6">
      <p className="tracking-[0.2em] text-xs text-purple-400">
        VOCÊ É NOSSO CONVIDADO PARA O CASAMENTO DE
      </p>

      <h1 className="text-5xl text-purple-400 mt-4 font-serif">
        {groom}
      </h1>

      <p className="text-2xl text-amber-600 my-2">&</p>

      <h1 className="text-5xl text-purple-400 font-serif">
        {bride}
      </h1>

      <div className="my-4 flex justify-center items-center gap-4 text-amber-600">
        <div className="h-px w-10 bg-amber-300" />
        ❤
        <div className="h-px w-10 bg-amber-300" />
      </div>

      <div className="space-y-3 text-gray-700">
        <div>
          <p className="text-xs tracking-[0.2em] text-gray-400">
            DATA
          </p>
          <p>{date}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gray-400">
            HORÁRIO
          </p>
          <p>{time}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gray-400">
            LOCAL
          </p>
          <p>{location}</p>
          <p className="italic text-sm text-gray-500">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}
