# React Error Handling for Beginners

This note explains the `handleImageError` pattern used in `speaker-detail.tsx` and how you can reuse the same idea in other places.

## What `handleImageError` does

In React, you can pass a function to an element event like `onError`.

For an image, `onError` runs when the browser cannot load the image file. A common fix is to show a fallback image instead.

Example:

```tsx
export default function SpeakerDetail({ speaker }: any) {
  const handleImageError = (e: any) => {
    e.target.src = "/images/speaker-pending.png";
  };

  return (
    <img
      src={`/images/speaker-${speaker.id}.jpg`}
      alt={`${speaker?.firstName} ${speaker?.lastName}`}
      onError={handleImageError}
    />
  );
}
```

## Simple idea

- Try to load the original file.
- If it fails, React calls the error handler.
- The handler changes the source to a safe fallback.

## Where this pattern is useful

You can use this idea for:

- broken images
- video thumbnails
- iframe content that fails to load
- form submission errors handled after a request fails

## Example 1: Image fallback

```tsx
function Avatar() {
  const handleImageError = (e: any) => {
    e.target.src = "/images/default-avatar.png";
  };

  return <img src="/images/user-1.png" alt="User" onError={handleImageError} />;
}
```

## Example 2: Multiple images can reuse the same handler

```tsx
function Gallery() {
  const handleImageError = (e: any) => {
    e.target.src = "/images/image-placeholder.png";
  };

  return (
    <>
      <img src="/images/a.png" alt="A" onError={handleImageError} />
      <img src="/images/b.png" alt="B" onError={handleImageError} />
    </>
  );
}
```

## Example 3: Form submit error handling

Forms usually do not use `onError` on the `<form>` tag itself. Instead, you handle errors after submit.

```tsx
function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // send data to server
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
}
```

## Beginner takeaway

Use `handleImageError` when you want a backup image if the main image fails.

