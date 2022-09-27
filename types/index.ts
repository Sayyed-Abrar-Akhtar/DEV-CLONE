/** Alphanumeric types with string or number */
export type AlphanumericType = string | number;

/** Input text field only types */
export type InputType = 'text' | 'number' | 'password' | 'checkbox';

/** Change Event for Input Elements */
export type InputKeyboardEvent = React.ChangeEvent<HTMLInputElement>;

/** Blogs type definition */
export interface Blog {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  slug: string;
  readable_publish_date: string;
  positive_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  user: {
    name: string;
    profile_image: string;
  };
  tag_list: [string];
}
