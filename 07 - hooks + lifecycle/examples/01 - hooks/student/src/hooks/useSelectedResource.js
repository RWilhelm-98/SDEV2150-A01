import { useState } from 'react';

export function useSelectedResource() {
  const [selectedResource, setSelectedResource] = useState(null);

  function updateSelectedResource(resource) {
    setSelectedResource(resource);
  }

  return [selectedResource, updateSelectedResource];
}
