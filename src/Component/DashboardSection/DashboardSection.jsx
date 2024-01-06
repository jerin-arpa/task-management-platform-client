import PropTypes from 'prop-types';

const DashboardSection = ({ title }) => {
    return (
        <div className='bg-black text-white'>
            <h2 className='text-3xl font-bold text-center py-20 uppercase text-[#fc5a03]'>{title}</h2>
        </div>
    );
};

DashboardSection.propTypes = {
    title: PropTypes.string,
};

export default DashboardSection;