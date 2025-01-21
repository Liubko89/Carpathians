import toast from "react-hot-toast";
import i18n from "../utils/i18n";
const { t } = i18n;

export const notify = (values) => {
  toast(t("notify", { username: values.name }), {
    style: {
      borderRadius: "10px",
      background: "var(--modal-bg-c)",
      color: "var(--light-c)",
      fontWeight: "500",
    },
  });
};
