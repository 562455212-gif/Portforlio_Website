export const personName = "赵榕";

export const sections = [
  { id: "opening", index: "01", label: "开场" },
  { id: "about", index: "02", label: "关于" },
  { id: "work", index: "03", label: "作品" },
  { id: "method", index: "04", label: "方法" },
  { id: "experience", index: "05", label: "经历" },
  { id: "contact", index: "06", label: "联系" },
] as const;

export const pending = "【待补充】";

export const principles = [
  {
    title: "状态先于自动化",
    body: "先写清一条记录处在哪一步、谁可以改它，再考虑让系统自己往下走。",
  },
  {
    title: "未知单独成态",
    body: "条件还不清楚时，保持未知。不用更高的匹配感把它写成通过，也不直接写成失败。",
  },
  {
    title: "已发生的版本不覆盖",
    body: "已经确认过的文件和决定留在当时的版本上。后面的修改另开一版。",
  },
];
