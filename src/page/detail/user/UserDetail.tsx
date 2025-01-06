import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { User } from '../../../entity/User';
import AuthService from '../../../service/AuthService';
import UserService from '../../../service/UserService';
import Loading from '../../../components/Loading';
import { Balance } from '../../../entity/Balance';
import coinIcon from '../../../assets/image/coin.png'; // Replace with the path to your coin icon
import CloseButton from '../../../components/CloseButton';

const authService = new AuthService();
const userService = new UserService();

const UserDetail: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [form] = Form.useForm();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const token = WA.player.state.DIGIFORCE_TOKEN as string;
            if (token) {
                try {
                    const response = await authService.auth(token) as { data: User };
                    const data = response.data;
                    userService.getWalletByUserId(data.id).then((response: any) => {
                        const balance = response.data as Balance
                        setBalance(balance.points_balance)
                    })
                    setUserDetails(data);
                    form.setFieldsValue(data);
                } catch (error) {
                    console.error('Failed to fetch user details:', error);
                    message.error('Lỗi khi tải thông tin người dùng');
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [form]);

    useEffect(() => {
        if (userDetails) {
            form.setFieldsValue(userDetails);
        }
        const timeoutId = setTimeout(() => {
            if (!userDetails) {
                close();
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [userDetails]);

    const handleEditClick = () => setIsEditing(true);

    const handleSaveClick = async () => {
        try {
            const formValues = await form.validateFields(); // Validate form inputs

            // Merge unchanged userDetails with the new form values
            const updatedUserDetails = { ...userDetails, ...formValues };

            // Save the updated user details
            await userService.updateUser(updatedUserDetails);

            // Update local state with the merged details
            setUserDetails(updatedUserDetails);

            setIsEditing(false);
            message.success('Cập nhật thông tin thành công!');
        } catch (error) {
            console.error('Validation or save failed:', error);
            message.error('Cập nhật thông tin thất bại!');
        }
    };
    const handleSignout = () => {
        WA.player.state.saveVariable('logout', true);
    };

    const handleCancelClick = () => {
        form.setFieldsValue(userDetails); // Reset form to original values
        setIsEditing(false);
    };

    const handleClose = () => {

        WA.player.state.saveVariable('openProfile', false);
    };

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (!userDetails) {
        return <div className="text-center mt-10 bg-white">Không có thông tin người dùng để hiển thị.</div>;
    }

    return (
        <div className="max-w-full  bg-white shadow-lg rounded-lg p-6 mt-10">
            <div className='flex justify-between'>
                <CloseButton onClick={handleClose} />
                <div className="bg-white shadow-lg rounded-lg p-2 w-auto text-center ">
                    <div className="flex justify-center items-center">
                        <span className="text-xl font-bold text-blue-600">{balance.toLocaleString('en-US')}</span>
                        <img
                            src={coinIcon}
                            alt="Coin Icon"
                            className="h-8 w-8 object-contain ml-1"
                        />
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Thông Tin Người Dùng</h2>
            {!isEditing ? (
                <>
                    <div className="mb-4">
                        <p><span className="font-bold">Tên hiển thị:</span> {userDetails.displayname}</p>
                        <p><span className="font-bold">Tên đăng nhập:</span> {userDetails.username}</p>
                        <p><span className="font-bold">Email:</span> {userDetails.email}</p>
                        <p><span className="font-bold">Số điện thoại:</span> {userDetails.phone}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Button type="primary" onClick={handleEditClick}>
                            Chỉnh sửa
                        </Button>
                        <Button type="default" danger onClick={handleSignout}>
                            Đăng xuất
                        </Button>
                    </div>
                </>
            ) : (
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={userDetails}
                    className="mb-4"
                >
                    <Form.Item
                        label="Tên hiển thị"
                        name="displayname"
                        rules={[{ required: true, message: 'Tên hiển thị không được để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[
                            { required: true, message: 'Tên đăng nhập không được để trống!' },
                            {
                                pattern: /^\S*$/,
                                message: 'Tên đăng nhập không được chứa khoảng trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Email không được để trống!' },
                            { type: 'email', message: 'Email không hợp lệ!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[{ required: true, message: 'Số điện thoại không được để trống!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className="flex justify-between items-center">
                        <Button type="primary" onClick={handleSaveClick}>
                            Lưu
                        </Button>
                        <Button onClick={handleCancelClick}>
                            Hủy
                        </Button>
                    </div>
                </Form>
            )}
        </div>
    );
};

export default UserDetail;
