export interface GenericSectionType {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia"?: [{ source_url: string; alt_text: string }];
  };
}

export interface ContactSecurityChallenge {
  a: number;
  b: number;
}
