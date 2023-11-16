export const layoutStyles = {
  main: {
    base: "h-screen w-screen bg-primary-50 text-default-800 overflow-hidden",
  },
  sidebar: {
    base: "fixed inset-0 z-[1] !right-0 h-full bg-default-900 text-default-200 font-light tracking-wider duration-500 ease transition-all overflow-x-hidden overflow-y-auto",
    // min-width
    screen: {
      default: {
        appearance: {
          expand: {
            base: "w-[256px]",
          },
          minimize: {
            base: "w-[80px]",
          },
        },
      },
      mobile: {
        appearance: {
          show: {
            base: "w-[256px] ml-0",
          },
          hide: {
            base: "w-[256px] -ml-[256px]",
          },
        },
      },
    },
    header: {
      base: "sticky top-0 z-[1] h-16 w-[256px] px-3 bg-default-900 flex items-center gap-2",
      icon: {
        base: "cursor-pointer",
      },
    },
  },
  wrapper: {
    base: "h-full w-full overflow-hidden duration-500 ease transition-all",
    // min-width
    screen: {
      default: {
        appearance: {
          auto: {
            base: "pl-[80px] xl:pl-[256px]",
          },
          contain: {
            base: "pl-[80px]",
          },
        },
      },
      mobile: {
        base: "pl-0",
      },
    },
  },
  container: {
    base: "relative h-full min-h-full w-full overflow-x-hidden overflow-y-auto duration-500 ease transition-all",
  },
  header: {
    base: "sticky top-0 h-16 w-full px-4 bg-white border-b border-default-100/50 flex items-center justify-between",
    icon: {
      base: "cursor-pointer hover:text-default-950",
    },
    actiops: {
      base: "flex items-center gap-4",
      item: {
        base: "w-12 h-12 rounded-full bg-primary-100/50",
      },
    },
  },
  content: {
    base: "w-full min-h-[calc(100%-7rem)] p-4",
  },
  footer: {
    base: "sticky bottom-0 h-12 w-full px-4 bg-default-50 text-default-300 flex items-center justify-center",
  },
};
