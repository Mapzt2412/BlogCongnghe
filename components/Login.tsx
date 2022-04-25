import Link from "next/link";
import { useEffect,useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import Image from "next/image";
import hide from "../assets/hide.png"
import logo from "../assets/logo.png"
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService } from "services";


export const Login = (showModal) =>{
    

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    useEffect(() => {
        function handler(evt) {
            if(evt.which === 27)
            handleClose();
        }
        document.addEventListener("keyup", handler);
        return () => {
            document.removeEventListener("keyup", handler);
        }
      }, [])
    useEffect(() => {
        if(showModal.open === true)
            setShow(true);
      }, [showModal.open])
    const router = useRouter();

  
      // form validation rules 
    const validationSchema = Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required')
      });
    const formOptions = { resolver: yupResolver(validationSchema) };
  
      // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;
  
    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                router.reload();
            })
            .catch(error => {
                setError('apiError', { message: error });
            });
      }
    return(
        <>  
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            
        >
            <Modal.Body>
                <h2 className="text-center"><Image src={logo} width={200} height={48} className="logo">
              </Image></h2>
                <h4 className="text-muted text-center pt-2">Đăng nhập</h4>
                <Form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                     <span>Tên đăng nhập</span> 
                    <InputGroup className="py-2">
                        <FormControl
                            className="input-field"
                            name="username"
                            {...register('username')}
                        />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </InputGroup>
                    <span>Mật khẩu</span>
                    <InputGroup className="py-1 pb-2">
                        <FormControl
                            type="password"
                            className="input-field"
                            id="password"
                            name="password"
                            {...register('password')}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </InputGroup>
                
                <div className="d-flex justify-content-between">
                        <div className="remember"> <label className="option text-muted"> Lưu mật khẩu <input type="radio" name="radio"/> <span className="checkmark"></span> </label> </div>
                        <div className="forgot"> <Link href="#">Quên mật khẩu?</Link> </div>
                </div>
                <div className="col d-flex justify-content-center">
                        <Button  disabled={formState.isSubmitting} type="submit" className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng nhập</Button>
                    </div>
                <div className="text-center pt-3 text-muted">Chưa có tài khoản? <Link href="#">Đăng ký</Link></div>
                {errors.apiError &&
                            <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                        }
                </Form>
            </Modal.Body>
        </Modal>
        
        </>
        

    );
        
}