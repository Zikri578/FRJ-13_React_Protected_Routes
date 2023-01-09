# FRJ-13_Protected_Routes

Protected routes adalah rute di aplikasi web yang hanya dapat diakses oleh pengguna yang memiliki izin atau otorisasi tertentu. Ini bisa digunakan untuk memastikan hanya pengguna yang terautentikasi yang dapat mengakses bagian tertentu dari aplikasi. Dalam aplikasi React, Anda dapat menggunakan teknik yang disebut "rute terproteksi" untuk membuat rute yang hanya dapat diakses oleh pengguna yang telah login atau memiliki izin yang sesuai. Ini bisa dilakukan dengan menggunakan komponen Higher-Order atau dengan menggunakan fitur routing yang disediakan oleh library routing seperti `react-router-dom`.

Untuk membuat rute terproteksi di aplikasi React, pertama-tama Anda perlu menentukan apa yang akan dilakukan jika pengguna tidak memiliki izin untuk mengakses rute tersebut. Biasanya, ini bisa berupa mengarahkan pengguna ke halaman login atau memberikan pesan kesalahan yang sesuai. Selanjutnya, Anda dapat menggunakan komponen Higher-Order atau fitur routing yang disediakan oleh library routing seperti `react-router-dom` untuk mengontrol akses ke rute tersebut.

Contohnya, jika Anda menggunakan `react-router-dom`, Anda dapat menggunakan `<PrivateRoute>` komponen yang ditugaskan ke rute yang ingin Anda proteksi. `<PrivateRoute>` komponen akan memeriksa apakah pengguna telah login atau memiliki izin yang sesuai, dan jika tidak, akan mengarahkan pengguna ke halaman login atau memberikan pesan kesalahan yang sesuai.

Misalnya, jika Anda ingin mengontrol akses ke rute `/dashboard`, Anda dapat menggunakan kode berikut:

    import { PrivateRoute } from './private-route';

    <Route exact path="/dashboard" component={Dashboard} />
    
Dengan cara ini, hanya pengguna yang telah login atau memiliki izin yang sesuai yang akan dapat mengakses rute `/dashboard`. Pengguna lain akan dikembalikan ke halaman login atau diberikan pesan kesalahan yang sesuai.
