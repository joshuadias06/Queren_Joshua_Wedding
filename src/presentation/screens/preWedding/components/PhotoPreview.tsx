import { motion } from "framer-motion";
import { Icon } from "../../../../presentation/design-system/components/Icon";

type Props = {
  photo: string;
  profileImage: string;
  onClose: () => void;
};

export function PhotoPreview({
  photo,
  profileImage,
  onClose,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="
        fixed inset-0 z-50
        bg-black/75 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="
          w-full
          max-w-2xl
          bg-white
          rounded-[32px]
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div
          className="
            flex items-center justify-between
            px-5 py-4
            border-b border-gray-100
          "
        >
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="perfil"
              className="
                w-14 h-14
                rounded-full
                object-cover
                border-2 border-purple-200
              "
            />

            <div>
              <p
                className="
                  text-2xl
                  text-[var(--color-primary)]
                "
                style={{
                  fontFamily: "var(--font-elegant)",
                }}
              >
                Queren & Joshua
              </p>

              <p className="text-xs text-gray-500">
                Pré-Wedding
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-gray-400
              hover:text-gray-700
              hover:bg-gray-100
              transition-all
            "
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Foto */}
        <div
          className="
            flex
            items-center
            justify-center
            bg-white
            p-2
          "
        >
          <img
            src={photo}
            alt="pre-wedding"
            className="
              max-w-full
              max-h-[calc(100vh-140px)]
              object-contain
            "
          />
        </div>
      </motion.div>
    </motion.div>
  );
}