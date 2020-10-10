export type ResourceForm = {
  url: string;
  title?: string | null;
  description?: string | null;
  tags: string[];
};

export type ResourceModel = {
  id: string;
} & ResourceForm;
