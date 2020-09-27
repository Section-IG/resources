export type ResourceForm = {
  url: string;
  description?: string | null;
  tags: string[];
};

export type ResourceModel = {
  id: string;
} & ResourceForm;
