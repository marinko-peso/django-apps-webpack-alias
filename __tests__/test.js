const djangoAppsAlias = require('./../index');
const testAppsPath = '__tests__/dummy_project/dummy_app_structure';

describe('detect proper app structure from dummy folder', () => {
  it('should look like', () => {
    expect(djangoAppsAlias({ dir: testAppsPath })).toEqual({
      '@app:admin': `${testAppsPath}/admin/static/admin/js/`,
      '@app:auth': `${testAppsPath}/auth/static/auth/js/`,
      '@app:dashboard': `${testAppsPath}/dashboard/static/dashboard/js/`
    });
  });
});

describe('gracefully fail if path provided is faulty', () => {
  it('should simply return empty object', () => {
    const dir = 'dummy_folder/here/cause_there_is_none';
    expect(djangoAppsAlias({ dir })).toEqual({});
  });
});

describe('sending custom params', () => {
  it('should apply them properly', () => {
    const dir = '__tests__/dummy_project_2/dummy_app_structure';
    const prefix = 'prefix:';
    expect(djangoAppsAlias({ dir, prefix }))
      .toEqual({
        [`${prefix}auth`]: `${dir}/auth/static/auth/js/`
      });
  });
});
