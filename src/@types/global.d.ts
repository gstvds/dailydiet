declare global {
  type OptionalProps<Interface, Props extends keyof Interface> = Omit<Interface, Props> & {
    [Key in Props]?: Interface[Key];
  };
}

export {};
