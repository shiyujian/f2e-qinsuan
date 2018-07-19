

import './FormBox.less';

const FormBox = (that) => {
    return <div className="form-box">
        { that.children }
    </div>
};
export default FormBox