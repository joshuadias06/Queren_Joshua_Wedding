import { RsvpHeader } from "./components/RsvpHeader";
import { TextField } from "./components/TextField";
import { Stepper } from "./components/Stepper";
import { PrimaryButton } from "./components/PrimaryButton";
import { useRsvpViewModel } from "./RsvpViewModel";

export function RsvpScreen() {
  const { weddingInfo, form, actions } = useRsvpViewModel();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-xl px-6 pb-12">
        <RsvpHeader />

        <TextField
          label="NOME COMPLETO"
          placeholder="Digite seu nome completo"
          value={form.fullName}
          onChange={actions.setFullName}
        />

        <Stepper
          label="NÚMERO DE ACOMPANHANTES"
          value={form.guests}
          onInc={actions.incGuests}
          onDec={actions.decGuests}
        />

        <TextField
          label="RECADO AOS NOIVOS (OPCIONAL)"
          placeholder="Uma breve mensagem aos noivos."
          value={form.message}
          onChange={actions.setMessage}
          multiline
        />

        <PrimaryButton title="Confirmar Presença" onClick={actions.submit} />

        <p
          className="mt-10 text-center text-xs tracking-[0.25em] text-[var(--color-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          POR FAVOR, CONFIRME ATÉ
          <br /> 
          31 DE MAIO DE 2026
        </p>

        {/* Detalhe: infos do evento (se quiser mostrar) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--color-text)]" style={{ fontFamily: "var(--font-body)" }}>
            {weddingInfo.location}
          </p>
          <p
            className="mt-1 italic text-sm text-[var(--color-muted)] whitespace-pre-line"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {weddingInfo.address}
          </p>
          <p className="mt-2 text-sm text-[var(--color-text)]" style={{ fontFamily: "var(--font-body)" }}>
            {weddingInfo.time}
          </p>
        </div>
      </div>
    </div>
  );
}
