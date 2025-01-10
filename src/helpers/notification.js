import toast from "react-hot-toast";

export const notify = (values) => {
  toast(`Thank you ${values.name}! We will call you soon`, {
    style: {
      borderRadius: "10px",
      background: "var(--modal-bg-c)",
      color: "var(--light-c)",
      fontWeight: "500",
    },
  });
};
