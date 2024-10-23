const rows = [
  {
    label: "Function",
    inputType: "select",
    options: ["SELECT", "Option 1"],
  },
  {
    label: "License No.",
    inputType: "text",
  },
  {
    label: "SOLID",
    inputType: "text",
    defaultValue: "50000300",
  },
  {
    label: "CCY",
    inputType: "text",
  },
  {
    label: "Scheme Code From",
    inputType: "text",
  },
  {
    label: "Scheme Code To",
    inputType: "text",
  },
  {
    label: "DSA ID From",
    inputType: "text",
  },
  {
    label: "DSA ID To",
    inputType: "text",
  },
  {
    label: "DSA Parent ID From",
    inputType: "text",
  },
  {
    label: "DSA Parent ID To",
    inputType: "text",
  },
  {
    label: "DSA User Grade From",
    inputType: "text",
  },
  {
    label: "DSA User Grade To",
    inputType: "text",
  },
  {
    label: "CIF ID From",
    inputType: "text",
  },
  {
    label: "CIF ID To",
    inputType: "text",
  },
  {
    label: "A/c ID From",
    inputType: "text",
  },
  {
    label: "A/c ID To",
    inputType: "text",
  },
  {
    label: "DSA Level From",
    inputType: "text",
  },
  {
    label: "DSA Level To",
    inputType: "text",
  },
  {
    label: "Consolidated DSA ID From",
    inputType: "text",
  },
  {
    label: "Consolidated DSA ID To",
    inputType: "text",
  },
  {
    label: "Free Code 1",
    inputType: "text",
  },
  {
    label: "Free Code 2",
    inputType: "text",
  },
];

export default function FormTable() {
  return (
    <table border="0">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="label">
              {row.label}
              {row.label.includes("*") && <span className="required">*</span>}
            </td>
            <td>
              {row.inputType === "select" ? (
                <select>
                  {row.options.map((option, idx) => (
                    <option key={idx} value={option === "SELECT" ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={row.inputType}
                  defaultValue={row.defaultValue || ""}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
