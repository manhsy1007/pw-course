1. Giải thích các câu lệnh:
- git init: khởi tạo kho lưu trữ mới ở vùng working directory
- git add <file_name>: add file đã chỉ định vào vùng staging
- git add .: add all file từ vùng working vào vùng staging
- git commit =m "message": tạo ra 1 phiên bản dựa vào các file được thêm ở vùng staging vào repository

2. a, tạo 3 file ở local
b, chạy lệnh git init: thì 3 file ở local sẽ ở vùng working directory
c, chạy lệnh git commit -m"init project": 3 file vẫn ở vùng working directory vì chưa có lệnh git add . để đẩy lên vùng staging
d, chạy lệnh git add file1: file 1 ở vùng working directory đẩy lên vùng staging
e, chạy lệnh: git commit -m"add file1": file 1 ở vùng staging đẩy lên vùng repository
f, chạy lệnh git add file: đẩy cả 3 file ở vùng working directory lên vùng staging