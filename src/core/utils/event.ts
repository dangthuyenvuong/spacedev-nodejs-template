/**
 * EventEmitter -> Nodejs cung cấp sẵn các event emitter để giúp các service nói chuyện với nhau, dùng để dispatch hoặc defined 1 event. Các event hoạt động độc lập và không thể thay đổi dữ liệu input 
 * Sử dụng trong những trường hợp cần dishpatch 1 event mà không cần chờ kết quả ví dụ: Log, message broker, cập nhật lại bộ điếm,....
 */


/**
 * Hook -> Là những action dùng để thay đổi các logic của 1 chức năng nào đó. Nhận input và output là dữ liệu được thay đổi
 * Mỗi module sẽ có danh sách các event để cho phép các module khác truy cập vào
 * 
 */


/**
 * Khi nào sử dụng EventEmitter và hook
 * 
 * EventEmitter
 * 
 * - Khi không cần chờ kết quả trả về
 * - Logic được xử lý bất đồng bộ và không ảnh hưởng tới trãi nghiệm của user
 * - Thường dùng để cập nhật hoặc đồng bộ database, ghi log vào hệ thống, monitor, thực thi background job,....
 * 
 * Hook
 * 
 * - Khi event có trả ra kết quả cho action hiện tại
 * - Thường dùng để các module can thiệp vào tiến trình xử lý của nhau và thay đổi dữ liệu
 * - 
 */