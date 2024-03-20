/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE

import users from "../models/users";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = async (title) => {
    const formattedUsers = await Promise.all(
      users.map((user) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              ...user,
              name: `${title} ${user.name}`,
            });
          }, 3000);
        });
      })
    );
    return formattedUsers;
  };
  
/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = async (name) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = users.find((user) => user.name === name);
        resolve(foundUser);
      }, 2000);
    });
  };
  
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = async (major) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const filteredUsers = users.filter((user) => user.major === major);
        resolve(filteredUsers);
      }, 4000);
    });
  };
  
/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export { formatUser, findByName, filterByMajor };
