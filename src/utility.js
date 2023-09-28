export const formatAmount = (str) => `₹${str}`;

const Regex = /^[a-zA-Z!@#$%^&*()_{}[\]:;<>,.?/~\\]$/;
export const handleNumberOnKeyDown = (e) =>
  Regex?.test(e.key) ? e.preventDefault() : null;
