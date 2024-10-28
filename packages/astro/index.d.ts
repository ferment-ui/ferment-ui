export type OpenGraph = {
  title: string,        // The title of your content
  type: string,         // The type of your object, e.g., 'website', 'article', etc.
  url: string,          // The canonical URL of your content
  image: string,        // The URL of the image that represents your content
  description?: string, // A brief description of your content (optional)
  site_name?: string,   // The name of your website (optional)
  locale?: string,      // The locale of your content, e.g., 'en_US' (optional)
  audio?: string,       // URL to an audio file associated with the content (optional)
  video?: string,       // URL to a video file associated with the content (optional)
  determiner?: string,  // The word that appears before your title, e.g., 'the', 'a' (optional)
  image_alt?: string,   // A description of the image, for accessibility purposes (optional)
  image_width?: number, // The width of the image in pixels (optional)
  image_height?: number, // The height of the image in pixels (optional)
  audio_secure_url?: string, // HTTPS version of the audio URL (optional)
  video_secure_url?: string, // HTTPS version of the video URL (optional)
  video_type?: string,  // MIME type for the video, e.g., 'video/mp4' (optional)
  audio_type?: string,  // MIME type for the audio, e.g., 'audio/mpeg' (optional)
}
