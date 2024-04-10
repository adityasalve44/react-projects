import { useState, useEffect } from "react";

function usePasswordSuggestions(length, numAllowed, charAllowed) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    let newSuggestions = [];

    if (length < 6) {
      newSuggestions = [...newSuggestions, "Password length must be at least 6 characters."];
    }

    if (!numAllowed && !charAllowed) {
      newSuggestions = [...newSuggestions, "Please select at least one character type."];
    }

    setSuggestions(newSuggestions);
  }, [length, numAllowed, charAllowed]);

  return suggestions;
}

export default usePasswordSuggestions;
