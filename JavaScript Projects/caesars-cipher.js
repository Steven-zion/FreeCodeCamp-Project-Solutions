/**
 * please note the question asked for rot13 cipher and not caesar cipher
 * functions should always be your go-to solution
 * read more on js methods
 * regex is hard i know
 */

function rot13(str) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot13);

  function rot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    return String.fromCharCode(
      charCode + 13 <= 90 ? charCode + 13 : ((charCode + 13) % 90) + 64
    );
  }
}

rot13("SERR PBQR PNZC");
