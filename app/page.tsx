'use client';

import { submitFormAction } from './server.actions';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form action={submitFormAction}>
      <input name="upload-files" type="file" />
      <button type="submit">Submit</button>
    </form>
  );
}
