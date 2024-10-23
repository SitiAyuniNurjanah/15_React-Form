# Summary React Form

## Penerapan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data, dll.

## Macam-macam Form

- Elemen `<input>` → biasanya digunakan untuk inputan yang tidak terlalu panjang.
- Elemen `<textarea>` → biasanya digunakan untuk inputan yang cukup panjang, seperti deskripsi.
- Elemen `<select>` → biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.
- Radio button → merupakan salah satu type di elemen `<input>`. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.
- Checkbox → merupakan salah satu type elemen `<input>`, kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

### Type elemen input lainnya:

- Text (default)
- Button
- Color
- Datetime-local
- Email
- File
- Hidden
- Image
- Month
- Number
- Password
- Radio
- Range
- Reset
- Search
- Submit
- Tel
- Time
- URL
- Week

## Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Component React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai “controlled component”.

### Tag Textarea

Pada HTML, elemen `<textarea>` mendefinisikan teks di dalamnya sebagai elemen anaknya. Di React, `<textarea>` menggunakan atribut `value`. Dengan cara ini, sebuah form yang menggunakan `<textarea>` dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

### Tag Select

Pada HTML, `<select>` membuat sebuah daftar drop-down.

## Handle Banyak Input

Atribut `name`: Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut `name` pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari `event.target.name`.

## Uncontrolled Component

Uncontrolled component adalah alternatif dari controlled component, di mana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan `ref` untuk mendapatkan nilai form dari DOM.

### Atribut Default Value

Pada lifecycle rendering React, atribut `value` pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut `defaultValue` alih-alih `value`. Kita bisa menggunakan `defaultChecked` untuk `<input type="checkbox">` dan `<input type="radio">` serta `defaultValue` untuk `<select>` dan `<textarea>`.

### Tag File Input

Pada HTML, sebuah `<input type="file">` memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JS lewat file API. Dalam React, sebuah `<input type="file"/>` merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

## Controlled Component

Sebuah controlled input menerima nilai saat ini sebagai prop serta callback untuk mengubah nilai tersebut. Ini adalah cara yang lebih "React way" meski tidak harus selalu digunakan. Nilai input ini harus ada di state yang disimpan di suatu tempat, biasanya di komponen yang merender input (alias form component).

### Flow Controlled Component

Setiap kali kita mengetik karakter baru, `handleNameChange` dipanggil. Ini akan mengatur nilai baru dari input ke state.

### Controlled Component Features

Controlled component memungkinkan form merespon perubahan input dengan segera, misalnya untuk:
- Umpan balik di tempat, seperti validasi.
- Menonaktifkan tombol kecuali semua field memiliki data yang valid.
- Mengimplementasikan format input tertentu, seperti nomor kartu kredit.

## Apa yang Membuat Elemen "Controlled"?

Elemen form seperti checkboxes, radios, selects, dan textareas menjadi "controlled" jika kita menetapkan nilainya melalui prop.

### Perbedaan Elemen pada Masing-Masing Formulir untuk Menjadi Controlled Component:

| Element                   | Value Property         | Change Callback  | New Value in Callback        |
|----------------------------|------------------------|------------------|------------------------------|
| `<input type="text"/>`      | `value="string"`       | `onChange`       | `event.target.value`          |
| `<input type="checkbox"/>`  | `checked={Boolean}`    | `onChange`       | `event.target.checked`        |
| `<input type="radio"/>`     | `checked={Boolean}`    | `onChange`       | `event.target.checked`        |
| `<textarea/>`               | `value="string"`       | `onChange`       | `event.target.value`          |
| `<select/>`                 | `value="option value"` | `onChange`       | `event.target.value`          |

## Validasi Form

### Mengapa Validasi Diperlukan?

Ada 3 alasan utama mengapa validasi form diperlukan:
1. Mencari input data yang benar dan sesuai format.
2. Melindungi akun pengguna (misalnya membuat pengguna memasukkan data password yang aman).
3. Melindungi sistem/aplikasi dari serangan.

### Client-side Validation

Validasi yang dilakukan pada sisi klien (browser) memastikan bahwa data input sesuai sebelum data form dikirimkan ke server.

### Built-in Form Validation

Fitur validasi langsung dari HTML5, umumnya lebih cepat karena tidak memerlukan JavaScript, namun kurang fleksibel dan pesan error-nya kaku.

### JavaScript Validation

Validasi ini memungkinkan kustomisasi lebih lanjut, tetapi kita perlu menulis kode JS sendiri.

### Server-side Validation

Validasi yang dilakukan pada sisi server bertugas untuk memvalidasi data kembali sebelum disimpan di database. Ini berbeda dari client-side validation karena tidak user-friendly dan koreksi kesalahan baru dikirim setelah form di-submit.

### Properti Validasi

- `required`: Menentukan field yang perlu diisi sebelum form dapat dikirimkan.
- `minLength` dan `maxLength`: Menentukan jumlah karakter minimal dan maksimal.
- `min` dan `max`: Menentukan nilai minimal dan maksimal angka yang dapat dimasukkan.
- `type`: Menentukan jenis data seperti angka, email, dll.
- `pattern`: Menentukan regex yang harus diikuti oleh data input.

## Kesimpulan

Form controlled dan uncontrolled memiliki kelebihannya masing-masing. Kita perlu mengevaluasi situasi spesifik dan memilih pendekatan yang sesuai. Jika form sangat sederhana, uncontrolled component sudah cukup. Controlled component lebih cocok untuk form yang kompleks dan memerlukan umpan balik real-time.