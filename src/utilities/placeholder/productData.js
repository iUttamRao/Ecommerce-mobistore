const productData = [
        {
          id:1,
          name: "iPhone 13 Pro",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/c/b/cbdaa34ea05b8ed2442e01404f66821703929b25.jpg",
          price: 1099.99,
          briefSpecs: "6.1-inch OLED, A15 Bionic, 128GB, Triple-camera system",
        },
        {
          id:2,
          name: "iPhone 13",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/d/3/d310a4b4afa44e33af5e9afffaee4fb90558af7f.jpg",
          price: 799.99,
          briefSpecs: "6.1-inch OLED, A15 Bionic, 64GB, Dual-camera system",
        },
        {
          id:3,
          name: "iPhone SE (2022)",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/6/d/6d0d76cfe77636acce2ff04c4238ea540ef1153c.jpg",
          price: 429.99,
          briefSpecs: "4.7-inch Retina, A15 Bionic, 64GB, Single-camera system",
        },
        {
          id:4,
          name: "iPhone 12",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/2/2/22e44756a816d86a6864fc78a8d434a6e5bf5e5f.jpg",
          price: 699.99,
          briefSpecs: "6.1-inch OLED, A14 Bionic, 128GB, Dual-camera system",
        },
        {
          id:5,
          name: "iPhone 11 Pro",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/d/9/d998b1b9b0c1511f982d5b467dd6ba366334410a.jpg",
          price: 999.99,
          briefSpecs: "5.8-inch OLED, A13 Bionic, 64GB, Triple-camera system",
        },
        {
          id:6,
          name: "iPhone XS",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/5/5/558e2a66001670f1c4ea30b663a3b38e55cd301e.jpg",
          price: 899.99,
          briefSpecs: "5.8-inch OLED, A12 Bionic, 64GB, Dual-camera system",
        },
        {
          id:7,
          name: "iPhone XR",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/4/8/4839dbcd8799e7d23cae78ce2117fb9896af0eaa.jpg",
          price: 599.99,
          briefSpecs: "6.1-inch LCD, A12 Bionic, 64GB, Single-camera system",
        },
        {
          id:8,
          name: "iPhone 8",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/1/5/15af5554fbfd8efa4757be4127dd48da4e3a7f97.jpg",
          price: 399.99,
          briefSpecs: "4.7-inch LCD, A11 Bionic, 64GB, Single-camera system",
        },
        {
          id:9,
          name: "iPhone 7 Plus",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/7/8/78ab227c4b6a0c5e3588aa836cb7f6cd5d40cccf.jpg",
          price: 549.99,
          briefSpecs: "5.5-inch LCD, A10 Fusion, 128GB, Dual-camera system",
        },
        {
          id:10,
          name: "iPhone 6s",
          brand: "Apple",
          images: "https://www.91-img.com/gallery_images_uploads/a/c/ac20d863ce7e94112f16c4122c32cd83d725dde8.jpg",
          price: 299.99,
          briefSpecs: "4.7-inch LCD, A9, 32GB, Single-camera system",
        },
        {
          id:11,
          name: "Samsung Galaxy S22 Ultra",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/f/c/fc19cc33631a9704897b80f5d400ca83f8e42426.jpg",
          price: 1299.99,
          briefSpecs: "6.8-inch AMOLED, Exynos 2200, 256GB, Quad-camera system",
        },
        {
          id:12,
          name: "Samsung Galaxy Z Fold 4",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/c/7/c7a00cbe34d4fd87c5ed435c2587448e2516d02b.jpg",
          price: 1799.99,
          briefSpecs: "7.3-inch Foldable AMOLED, Snapdragon 888, 512GB, Foldable design",
        },
        {
          id:13,
          name: "Samsung Galaxy A52",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/2/6/26303b59bafa9959ecb8a21452c488a6431981ca.jpg",
          price: 499.99,
          briefSpecs: "6.5-inch AMOLED, Snapdragon 750G, 128GB, Quad-camera system",
        },
        {
          id:14,
          name: "Samsung Galaxy Note 20",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/4/7/4783e25bbd117da7ac9df9be266a5fb2dc61c3ac.jpg",
          price: 899.99,
          briefSpecs: "6.7-inch AMOLED, Exynos 990, 256GB, Triple-camera system",
        },
        {
          id:15,
          name: "Samsung Galaxy S21",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/b/9/b9eab33060e11c1c36cf304b278bcfc6c2fc64f5.jpg",
          price: 799.99,
          briefSpecs: "6.2-inch AMOLED, Snapdragon 888, 128GB, Triple-camera system",
        },
        {
          id:16,
          name: "Samsung Galaxy S20",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/f/a/fa34536b140eecdd46829f061772dcc978f94b3c.jpg",
          price: 699.99,
          briefSpecs: "6.2-inch AMOLED, Snapdragon 865, 128GB, Triple-camera system",
        },
        {
          id:17,
          name: "Samsung Galaxy S10",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/4/2/4232706a02fcb8a6d9792660582c74906fb5346c.jpg",
          price: 599.99,
          briefSpecs: "6.1-inch AMOLED, Snapdragon 855, 128GB, Triple-camera system",
        },
        {
          id:18,
          name: "Samsung Galaxy Note 10+",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/a/9/a975ba6ec80fee88f884be02e1403610be49509f.jpg",
          price: 899.99,
          briefSpecs: "6.8-inch AMOLED, Snapdragon 855, 256GB, Quad-camera system",
        },
        {
          id:19,
          name: "Samsung Galaxy A72",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/a/0/a056ea05e6271b8832ef22f70df9ddb88dcca4a8.jpg",
          price: 549.99,
          briefSpecs: "6.7-inch AMOLED, Snapdragon 720G, 128GB, Quad-camera system",
        },
        {
          id:20,
          name: "Samsung Galaxy M32",
          brand: "Samsung",
          images: "https://www.91-img.com/gallery_images_uploads/6/e/6e2530e5a71e1b8d439fd947cefbc0d8b23660a3.jpg",
          price: 249.99,
          briefSpecs: "6.4-inch AMOLED, MediaTek Helio G80, 64GB, Quad-camera system",
        },
        {
          id:21,
          name: "Google Pixel 6 Pro",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/1/5/1519346d1b758c1fd607eb343c9bf42fecb822fa.jpg",
          price: 899.99,
          briefSpecs: "6.7-inch OLED, Google Tensor, 128GB, Dual-camera system",
        },
        {
          id:22,
          name: "Google Pixel 5a",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/d/d/dda9ee89561810999c15da73f9935656796be6f8.jpg",
          price: 449.99,
          briefSpecs: "6.34-inch OLED, Snapdragon 765G, 128GB, Dual-camera system",
        },
        {
          id:23,
          name: "Google Pixel 4a",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/4/7/47906b9a47188c299c9ba4a427d1e9d3ca67e482.jpg",
          price: 349.99,
          briefSpecs: "5.81-inch OLED, Snapdragon 730G, 128GB, Single-camera system",
        },
        {
          id:24,
          name: "Google Pixel 3",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/6/5/65e69114dd6698993bfbd47bba1fce3d93f597b5.jpg",
          price: 599.99,
          briefSpecs: "5.5-inch OLED, Snapdragon 845, 64GB, Single-camera system",
        },
        {
          id:25,
          name: "Google Pixel 2 XL",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/5/8/58f0547518d07477f64a87a229583e10060faba1.jpg",
          price: 799.99,
          briefSpecs: "6.0-inch P-OLED, Snapdragon 835, 64GB, Single-camera system",
        },
        {
          id:26,
          name: "Google Pixel 6",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/8/6/86b38b3f6220d75b043ac02088d410aa3b619bb4.jpg",
          price: 699.99,
          briefSpecs: "6.4-inch OLED, Google Tensor, 128GB, Dual-camera system",
        },
        {
          id:27,
          name: "Google Pixel 5",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/b/2/b2c18c45288203cc8dbe07186352c7b1e895926e.jpg",
          price: 599.99,
          briefSpecs: "6.0-inch OLED, Snapdragon 765G, 128GB, Dual-camera system",
        },
        {
          id:28,
          name: "Google Pixel 4 XL",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/a/0/a0b9256a085d55ed1f24a7a80527f80aca3de1a9.jpg",
          price: 799.99,
          briefSpecs: "6.3-inch P-OLED, Snapdragon 855, 128GB, Dual-camera system",
        },
        {
          id:29,
          name: "Google Pixel 3a",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/0/5/05b8fa2768bd392563eae173861d32d8a3743734.jpg",
          price: 399.99,
          briefSpecs: "5.6-inch OLED, Snapdragon 670, 64GB, Single-camera system",
        },
        {
          id:30,
          name: "Google Pixel 2",
          brand: "Google",
          images: "https://www.91-img.com/gallery_images_uploads/6/f/6f42c45b441d9260c2af8fb3d401279294ab5676.jpg",
          price: 649.99,
          briefSpecs: "5.0-inch AMOLED, Snapdragon 835, 64GB, Single-camera system",
        },
        {
          id:31,
          name: "OnePlus 9T",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/0/0/00082ed2af7d28e7a387ac78133ac5ce3fb1759a.jpg",
          price: 699.99,
          briefSpecs: "6.5-inch AMOLED, Snapdragon 888, 128GB, Triple-camera system",
        },
        {
          id:32,
          name: "OnePlus Nord 2",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/a/a/aa1ac7576d1e12e5b31bd34ca8ab1664b232094c.jpg",
          price: 399.99,
          briefSpecs: "6.43-inch AMOLED, MediaTek Dimensity 1200, 128GB, Triple-camera system",
        },
        {
          id:33,
          name: "OnePlus 8T",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/6/7/6764820eed071cb2104e9ebe23d6ad0220e82ba8.jpg",
          price: 599.99,
          briefSpecs: "6.55-inch AMOLED, Snapdragon 865, 128GB, Quad-camera system",
        },
        {
          id:34,
          name: "OnePlus 7 Pro",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/5/1/512fc103ed0a6e20523665d92f2a92af1e0a74f7.jpg",
          price: 499.99,
          briefSpecs: "6.67-inch Fluid AMOLED, Snapdragon 855, 256GB, Triple-camera system",
        },
        {
          id:35,
          name: "OnePlus 6",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/5/0/50e415ccb33c1413ce6494ca4ce7512a733ca1d0.jpg",
          price: 399.99,
          briefSpecs: "6.28-inch Optic AMOLED, Snapdragon 845, 128GB, Dual-camera system",
        },
        {
          id:36,
          name: "OnePlus 5T",
          images: "https://www.91-img.com/gallery_images_uploads/f/9/f92c746053b6cfa9898e07d8eaac2bfae96464d8.jpg",
          price: 449.99,
          briefSpecs: "6.01-inch Optic AMOLED, Snapdragon 835, 64GB, Dual-camera system",
        },
        {
          id:37,
          name: "OnePlus 5",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/5/1/5184ef588cd5a01f30f6dbda93725fa2ca7ca9c6.jpg",
          price: 479.99,
          briefSpecs: "5.5-inch Optic AMOLED, Snapdragon 835, 128GB, Dual-camera system",
        },
        {
          id:38,
          name: "OnePlus 3T",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/f/d/fdf4ad3bee2ac72f92f43987182d4b49ccdaa00e.jpg",
          price: 439.99,
          briefSpecs: "5.5-inch Optic AMOLED, Snapdragon 821, 128GB, Single-camera system",
        },
        {
          id:39,
          name: "OnePlus 3",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/0/7/072398dd3e219e1ba00fe83abecbde19b049d14d.jpg",
          price: 399.99,
          briefSpecs: "5.5-inch Optic AMOLED, Snapdragon 820, 64GB, Single-camera system",
        },
        {
          id : 40,
          name: "OnePlus 2",
          brand: "OnePlus",
          images: "https://www.91-img.com/gallery_images_uploads/4/2/42c6a4818cf6a41c32149b766dabde86b400956c.jpg",
          price: 299.99,
          briefSpecs: "5.5-inch LTPS LCD, Snapdragon 810, 64GB, Single-camera system",
        },
        {
          id:41,
          name: "Realme GT 2 Pro",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/7/6/76115b69e40581bf4e402ea819f992113c40966f.jpg",
          price: 799.99,
          briefSpecs: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 128GB, Triple-camera system",
        },
        {
          id:42,
          name: "Realme 8 Pro",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/2/c/2c8b918e761b3dfcffe77002d37a04d884f2e135.jpg",
          price: 349.99,
          briefSpecs: "6.4-inch AMOLED, Snapdragon 720G, 128GB, Quad-camera system",
        },
        {
          id:43,
          name: "Realme Narzo 50A",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/9/1/9170dd196c5d4d3f58da973d7852c7d8cb48ef64.jpg",
          price: 199.99,
          briefSpecs: "6.5-inch IPS LCD, MediaTek Helio G85, 64GB, Dual-camera system",
        },
        {
          id:44,
          name: "Realme C25s",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/0/8/08190215fc07483dae76672bf91b65cae85997a3.jpg",
          price: 149.99,
          briefSpecs: "6.5-inch IPS LCD, MediaTek Helio G85, 64GB, Triple-camera system",
        },
        {
          id:45,
          name: "Realme X7 Pro",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/5/7/57dae5706986d2235c0d7d982f3dc378cba93ac0.jpg",
          price: 299.99,
          briefSpecs: "6.55-inch Super AMOLED, MediaTek Dimensity 1000+, 128GB, Quad-camera system",
        },
        {
          id:46,
          name: "Realme 7i",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/5/8/58da184834df3bdedefa4b8bdf6ddd4fbeb0d036.jpg",
          price: 249.99,
          briefSpecs: "6.5-inch IPS LCD, Snapdragon 662, 64GB, Quad-camera system",
        },
        {
          id:47,
          name: "Realme C12",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/c/3/c333754b895e6c733c18919fe14b4a32ba1ba457.jpg",
          price: 129.99,
          briefSpecs: "6.5-inch IPS LCD, MediaTek Helio G35, 32GB, Triple-camera system",
        },
        {
          id:48,
          name: "Realme 6 Pro",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/e/1/e14ba5c732a56c165d6c4b98be2a2ad3645ec572.jpg",
          price: 249.99,
          briefSpecs: "6.6-inch IPS LCD, Snapdragon 720G, 128GB, Quad-camera system",
        },
        {
          id:49,
          name: "Realme X50 Pro 5G",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/5/4/5457730e9930086dfb0e56ca018513416fb7e665.jpg?w=0&h=901&q=80&c=1",
          price: 499.99,
          briefSpecs: "6.44-inch Super AMOLED, Snapdragon 865, 128GB, Quad-camera system",
        },
        {
          id:50,
          name: "Realme C3",
          brand: "Realme",
          images: "https://www.91-img.com/gallery_images_uploads/4/b/4b53721e5971406610c2cf0522aca872deecf642.jpg",
          price: 129.99,
          briefSpecs: "6.5-inch IPS LCD, MediaTek Helio G70, 32GB, Dual-camera system",
        },
    ] 

export default productData