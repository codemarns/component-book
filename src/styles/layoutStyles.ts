export const layoutStyles = {
  main: {
    base: "h-screen w-screen bg-primary-50 text-default-800 overflow-hidden",
  },
  sidebar: {
    base: "fixed inset-0 z-[1] !right-0 h-full bg-default-900 text-default-50 duration-500 ease transition-all",
    appearance: {
      minimize: {
        show: "w-[256px]",
        hide: "w-[80px]",
      },
      hide: {
        show: "w-[256px] ml-0",
        hide: "w-[256px] -ml-[256px]",
      },
    },
    header: {
      base: "h-16 px-4 flex-1 flex items-center justify-end",
      icon: {
        base: "cursor-pointer",
      },
    },
  },
  wrapper: {
    base: "h-full w-full overflow-hidden duration-500 ease transition-all",
    appearance: {
      minimize: {
        transition: {
          "move along": {
            addPadding: "pl-[256px]",
            removePadding: "pl-[80px]",
          },
          overlay: {
            addPadding: "pl-[80px] lg:pl-[256px]",
            removePadding: "pl-[80px]",
          },
        },
      },
      hide: {
        transition: {
          "move along": {
            addPadding: "pl-[256px]",
            removePadding: "pl-0",
          },
          overlay: {
            addPadding: "lg:pl-[256px]",
            removePadding: "pl-0",
          },
        },
      },
    },
    // transition: {
    //   "move along": {
    //     removePadding: "p-0",
    //     addPadding: "pl-[256px]",
    //   },
    //   overlay: {
    //     removePadding: "p-0",
    //     addPadding: "lg:pl-[256px]",
    //   },
    // },
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
